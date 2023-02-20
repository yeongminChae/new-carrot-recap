import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((response) => response.json());

// const fetcher = (url: string) => {
//   fetch(url).then((response) => response.json());
// }; i used curly braces so i need to write return.

export default function useUser() {
  const { data, error } = useSWR("/api/users/me", fetcher);
  const router = useRouter();

  return data;
}

// without useSWR

// import { useEffect, useState } from "react";
// export default function useUser() {
//     const [user, setUser] = useState();
//     const router = useRouter();
//     useEffect(() => {
//       fetch("/api/users/me")
//         .then((response) => response.json())
//         .then((data) => {
//           if (!data.ok) {
//             return router.replace("/enter"); // replace and push r similiar but replace donsn't allow u to have history.
//           }
//           setUser(data.profile);
//         });
//     }, [router]);
//     return user;
//   }
