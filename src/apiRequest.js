const apiRequest = async (url= '', optionsObj = null, errMsg = null) => {
  try {

    const response = await fetch(url, optionsObj);

  } catch (err) {

  } finally {

  }
}

export default apiRequest;