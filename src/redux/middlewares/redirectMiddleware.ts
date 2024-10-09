export default function redirectMiddleware() {
  return (next: any) => (action: any) => {
    const redirectUrl = action.payload?.redirectUrl;
    if (redirectUrl) {
      window.location = redirectUrl;
      return undefined;
    }
    return next(action);
  };
}
