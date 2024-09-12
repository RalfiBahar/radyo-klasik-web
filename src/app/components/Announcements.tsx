"use client";
import useAnnouncement from "../hooks/useAnnouncement";

const Announcements = () => {
  const { announcement, loading, error } = useAnnouncement();

  if (loading) {
    return null; //<p>Loading announcement...</p>;
  }

  if (error) {
    return null; //<p>Error: {error}</p>;
  }

  return (
    <>
      {announcement && (
        <div className="text-center md:text-left w-60 mb-12">
          <h2 className="text-lg font-bold">ANNOUNCEMENTS</h2>
          <p className="text-sm mt-2">{announcement}</p>
        </div>
      )}
    </>
  );
};

export default Announcements;
