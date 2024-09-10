// utils/auth.ts
let token: string | null = null;

interface TokenResponse {
  access_token?: string;
  error?: string;
}

export async function getToken(): Promise<string | null> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/generate_token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        shared_secret: process.env.NEXT_PUBLIC_SHARED_SECRET,
      }),
    }
  );

  const data: TokenResponse = await response.json();

  if (data.access_token) {
    return data.access_token;
  } else {
    console.error("Failed to retrieve token");
    return null;
  }
}

export async function fetchWithAuth(
  url: string,
  options: RequestInit = {},
  retries: number = 10,
  delay: number = 1000
): Promise<Response> {
  if (!token) {
    token = await initializeToken();
  }

  options.headers = {
    ...options.headers,
    Authorization: `Bearer ${token}`,
  };

  let response = await fetch(url, options);

  if (response.status === 401) {
    const data: TokenResponse = await response.json();

    if (data.error === "token_expired") {
      console.log("Token expired, refreshing...");
      token = await getToken();

      if (token) {
        localStorage.setItem("token", token);
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${token}`,
        };
        response = await fetch(url, options); // Retry the request with new token
      } else {
        console.error("Failed to refresh token");
        throw new Error("Failed to refresh token");
      }
    } else {
      console.error("Unauthorized");
      throw new Error("Unauthorized");
    }
  }

  if (!response.ok && retries > 0 && response.status !== 401) {
    console.log(`Retrying request... ${retries} attempts left`);
    await new Promise((res) => setTimeout(res, delay));
    return fetchWithAuth(url, options, retries - 1, delay * 2);
  }

  return response;
}

export async function initializeToken(): Promise<string | null> {
  token = localStorage.getItem("token");

  if (!token) {
    token = await getToken();

    if (token) {
      localStorage.setItem("token", token);
    } else {
      console.error("Couldn't fetch token");
      return null;
    }
  }

  return token;
}
