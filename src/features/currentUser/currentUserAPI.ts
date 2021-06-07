export function loadCurrentUser(): Promise<{ name: string }> {
  return new Promise((resolvse, reject) => {
    setTimeout(() => {
      resolvse({
        name: "Khachatur Jackson",
      });
    }, 1000);
  });
}

// export async function loadCurrentUser() {
//   setTimeout(() => {
//     Promise.resolve({ name: "Khachtur Jackson" });
//   }, 1000);
// }
