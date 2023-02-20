import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useUser() {
  const [user, setUser] = useState();
  const router = useRouter();
  useEffect(() => {
    fetch("/api/users/me")
      .then((response) => response.json())
      .then((data) => {
        if (!data.ok) {
          return router.replace("/enter"); // replace and push r similiar but replace donsn't allow u to have history.
        }
        setUser(data.profile);
      });
  }, [router]);
  return user;
}
