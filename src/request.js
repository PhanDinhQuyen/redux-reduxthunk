const defaultURL = "/api/todo";

export const POST = async (data) => {
  try {
    const response = await fetch(defaultURL, {
      method: "POST",
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const GET = async () => {
  try {
    const response = await fetch(defaultURL);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const PATCH = async (data) => {
  try {
    const response = await fetch(defaultURL, {
      method: "patch",
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
