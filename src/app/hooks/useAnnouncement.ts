import { useState, useEffect } from "react";
import { fetchWithAuth } from "../helpers/token";

const useAnnouncement = () => {
  const [announcement, setAnnouncement] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const response = await fetchWithAuth(
          `${process.env.NEXT_PUBLIC_API_URL}/recording/announcement`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch announcement");
        }

        const data = await response.json();
        setAnnouncement(data.announcement || "No announcements available");
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncement();
  }, []);

  return { announcement, loading, error };
};

export default useAnnouncement;
