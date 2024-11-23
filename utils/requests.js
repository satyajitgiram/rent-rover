const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// To Fetch all the properties 
async function fetchProperties() {
  try {
    // Check if the API domain is available
    if (!apiDomain) {
      console.log("API domain not available. Returning empty array.");
      return [];
    }


    const res = await fetch(`${apiDomain}/properties?timestamp=${new Date().getTime()}`);

    // Log the status of the response
    console.log("Response status:", res.status);

    if (!res.ok) {
      throw new Error(`Failed to fetch Data. Status: ${res.status}`);
    }

    // Log when we start parsing the response
    console.log("Parsing JSON response from properties API...");
    const data = await res.json();
    console.log(" ------------------- Called Fetchproperties function -------");
    return data;

  } catch (error) {
    // Detailed error logging
    console.error("Error in fetchProperties function:", error.message);
    return [];
  }
}


// To Fetch single the propertie 
async function fetchProperty(id) {
    try{
        // Handle the case where the domain is not available yet 
        if (!apiDomain){
            return null;
        }
      const res = await fetch(`${apiDomain}/properties/${id}`)
      if (!res.ok){
        throw new Error("Failed to fetch Data")
      }
      return res.json();
  
    }catch(error){
      console.log(error)
      return null;
    }
  }

export {fetchProperties, fetchProperty}
