const API_LINK = "https://645aa0bf65bd868e9320b568.mockapi.io/";

export const operationTypes = {
  get: "GET",
  post: "POST",
  put: "PUT",
  patch: "PATCH",
  delete: "DELETE",
};

export async function tryFetch(ending, type = operationTypes.get, payload = false) {
  try {
    const attributes = {
      method: type,
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (payload) {
      attributes.body = JSON.stringify(payload);
    }
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
