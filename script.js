function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    html.classList.remove("light")
    img.setAttribute(
      "src",
      "./assets/Gemini_Generated_Image_7ru9c57ru9c57ru9-removebg-preview.png",
    )
  } else {
    html.classList.add("light")
    img.setAttribute(
      "src",
      "./assets/Gemini_Generated_Image_bca1hkbca1hkbca1-removebg-preview.png",
    )
  }
}

const img = document.querySelector("#profile img")
const html = document.documentElement

if (html.classList.contains("light")) {
  img.setAttribute(
    "src",
    "./assets/Gemini_Generated_Image_bca1hkbca1hkbca1-removebg-preview.png",
  )
} else {
  img.setAttribute(
    "src",
    "./assets/Gemini_Generated_Image_7ru9c57ru9c57ru9-removebg-preview.png",
  )
}
