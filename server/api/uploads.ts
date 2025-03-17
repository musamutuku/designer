import { writeFile } from "fs/promises";
import { join } from "path";

export default defineEventHandler(async (event) => {
  const formData = await readMultipartFormData(event);
  if (!formData) return { error: "No file uploaded" };

  const file = formData.find((item) => item.name === "photo");
  if (!file || !file.data) return { error: "No image found" };

  const filePath = `/photos/${Date.now()}.png`;
  const fullPath = join(process.cwd(), "public", filePath);

  try {
    // Ensure file.data is a Buffer
    const fileBuffer = Buffer.from(file.data as any); 
    await writeFile(fullPath, fileBuffer); // Save file
    return { url: filePath }; // Return image URL
  } catch (error) {
    console.error("File save error:", error);
    return { error: "Failed to save image" };
  }
});


