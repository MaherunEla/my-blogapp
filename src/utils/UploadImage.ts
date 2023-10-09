import axios from "axios";
type url = {
  success: number;
  url: string | null;
};

export const uploadImages = async (
  file: File,
  setUploadProgress: any
): Promise<url> => {
  try {
    setUploadProgress(0);
    let formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "my-uploads");

    const { data } = await axios.post(
      "https://api.cloudinary.com/v1_1/djfwg1dfa/image/upload",
      formData
    );
    console.log({ data });

    return {
      success: 1,
      url: data.secure_url,
    };
  } catch (error) {
    console.error({ error });
    return {
      success: 1,
      url: null,
    };
  }
};
