import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';

(async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY,  // Click 'View API Keys' above to copy your API key
        api_secret: process.env.CLOUDINARY_API_SECRET  // Click 'View API Keys' above to copy your API secret
    });

const uploadOnCLoudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto",
        })
        console.log("Upload successfully:", response.url);
        return response;


    }
    catch (error) {
        fs.unlinkSync(localFilePath); // delete the file if upload failed to save space
        return null;
        
    }
}


    // Upload example
    cloudinary.uploader.upload(
        "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
        { public_id: "olympic_flag" },
        function(error, result) {
            if (error) {
                console.error("Upload Error:", error);
            } else {
                console.log("Upload Result:", result);
            }
        }
    );

})();