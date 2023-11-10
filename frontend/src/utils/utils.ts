export const formatDate = (dateString: string) => {
    const dateObject = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    const formattedDate = dateObject.toLocaleString("en-US", options);
    return formattedDate;
  };