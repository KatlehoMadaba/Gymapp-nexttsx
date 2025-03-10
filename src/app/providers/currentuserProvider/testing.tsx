// import { useEffect } from "react";
// const MyComponent = () => {
//  const { getCurrentUser, currentuser, isError, isPending } = UseUsers();
//  const { loginTrainer } = UseTrainers();
//  let token = "";
//  if (loginTrainer) {
//    token = sessionStorage.getItem("jwtToken");
//  }
//  useEffect(() => {
//    let isMounted = true; // Flag to track if the component is still mounted
//    const fetchData = async () => {
//      try {
//        // Only call getCurrentUser if the component is still mounted
//        if (isMounted) {
//          await getCurrentUser(); // Assuming it's an async function
//        }
//      } catch (error) {
//        if (isMounted) {
//          // Handle errors if necessary
//          console.error(error);
//        }
//      }
//    };
//    fetchData();
//    // Cleanup function to handle component unmount
//    return () => {
//      isMounted = false; // Mark component as unmounted
//    };
//  }, [token, getCurrentUser]);
//  return (
// <div>
//      {/* Render your UI */}
// </div>
//  );
// };