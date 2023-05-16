const API_LINK = "https://connections-api.herokuapp.com/";

export const operationTypes = {
  get: "GET",
  post: "POST",
  put: "PUT",
  patch: "PATCH",
  delete: "DELETE",
};

export async function tryFetch(
  ending,
  type = operationTypes.get,
  additionalHeaders = {},
  payload = false
) {
  try {
    const attributes = {
      method: type,
      headers: {
        "Content-Type": "application/json",
        ...additionalHeaders,
      },
    };
    if (payload) {
      attributes.body = JSON.stringify(payload);
    }
    console.log(`Used link: ${API_LINK + ending}`);
    console.log("Fetch attributes:");
    console.log(attributes);
    const result = await fetch(API_LINK + ending, attributes);
    if (result.ok) {
      const resultJson = await result.json();
      return {
        success: true,
        data: resultJson,
      };
    } else {
      return {
        success: false,
        errorMessage: `${result.status}: ${result.statusText}`,
      };
    }
  } catch (error) {
    return {
      success: false,
      errorMessage: error.message,
    };
  }
}
