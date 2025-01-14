
export const geminiAI=async (gptQuery)=>{
const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${import.meta.env.VITE_GOOGLE_API}`;
const payload = {
  contents: [
    {
      parts: [{ text: gptQuery }], 
    },
  ],
};

try {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Error: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  return data
} catch (error) {
  console.error("Error fetching AI response:", error);
  return error
}

}