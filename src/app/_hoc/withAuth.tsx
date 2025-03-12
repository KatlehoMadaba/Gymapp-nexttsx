// "use client";

// import { useRouter, usePathname } from "next/navigation";
// import React, { useEffect, useState } from "react";

// interface WithAuthProps {
//   allowedRoles?: string[];
// }
// //React.ComponentType
//   //refers to both function & class component
// const WithAuth = <P extends object>(
//   WrappedComponent: React.ComponentType<P>,
//   { allowedRoles = [] }: WithAuthProps = {}
// ) => {
//   const AuthenticatedComponent = (props: P) => {
//     const router = useRouter();
//     const pathname = usePathname();
//     const [isLoading, setIsLoading] = useState(true);
//     const [isAuthorized, setIsAuthorized] = useState(false);

//     useEffect(() => {
//       const token = localStorage.getItem("auth_token");
//       const userRole = localStorage.getItem("user_role");

//       if (!token) {
//         if (pathname !== "/login") router.replace("/login");
//         return;
//       }

//       if (allowedRoles.length > 0 && !allowedRoles.includes(userRole || "")) {
//         if (userRole === "admin") {
//           router.replace("/admin");
//         } else {
//           router.replace("/client");
//         }
//         return;
//       }

//       setIsAuthorized(true);
//       setIsLoading(false);
//     }, [router,pathname]);

//     if (isLoading) {
//       return <p>Loading...</p>;
//     }

//     return isAuthorized ? <WrappedComponent {...props} /> : null;
//   };

//   AuthenticatedComponent.displayName =
//     `WithAuth(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;

//   return AuthenticatedComponent;
// };

// export default WithAuth;