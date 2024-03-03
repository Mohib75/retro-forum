const loadAllPost = async () => {
	// added the loader
	const loader = document.getElementById("discuss-loader")
	loader.classList.remove("hidden")
	const response = await fetch("https://openapi.programming-hero.com/api/retro-forum/posts")
	const data = await response.json()
	let posts = data.posts
	const postContainer = document.getElementById("discuss-box")
	posts.forEach((post) => {
		// remove the loader
		loader.classList.add("hidden")
		const div = document.createElement("div")
		div.innerHTML = `<div class="min-w-[900px] h-[270px] border-none rounded-3xl bg-[#797DFC1A] p-10">
                        <div class="flex justify-between">
                            <div class="bg-white min-w-[100px] h-[100px] rounded-2xl relative">
                                <div
                                    class="min-w-[18.7px] min-h-[18.7px] rounded-full border-none ${
										post.isActive ? "bg-[#10B981]" : "bg-[#FF3434]"
									}  absolute right-0 top-0">
                                </div>
                                <img class="w-full h-full object-cover rounded-2xl"
                                    src=${post.image} alt="">
                            </div>

                            <div class="flex flex-col w-[70%]">
                                <div class="flex gap-8">
                                    <p class="text-sm font-inter font-medium leading-4 text-[#12132DCC]"># ${post.category}</p>
                                    <p class="text-sm font-inter font-medium leading-4 text-[#12132DCC]">Author : ${post.author.name}</p>
                                </div>
                                <h4 class="text-xl text-black font-bold leading-6 mt-2">${post.title}</h4>
                                <p class="text-[#12132D99] leading-6 font-inter my-4">${post.description}</p>

                                <hr class="border-dashed h-[1px] bg-[#03071233] w-full my-4">

                                <div class="flex justify-between items-center">
                                    <div class="flex gap-8 items-center">
                                        <div class="flex gap-4 items-center text-[#12132D99] font-inter leading-5 ">
                                            <img src="./Assets/images/comment.png" alt="comment">
                                            <p>${post.comment_count}</p>
                                        </div>

                                        <div class="flex gap-4 items-center text-[#12132D99] font-inter leading-5 ">
                                            <img src="./Assets/images/eye.png" alt="eye">
                                            <p>${post.view_count}</p>
                                        </div>

                                        <div class="flex gap-4 items-center text-[#12132D99] font-inter leading-5 ">
                                            <img src="./Assets/images/time.png" alt="time">
                                            <p>${post.posted_time} min</p>
                                        </div>
                                    </div>

                                    <img class="cursor-pointer" src="./Assets/images/submit.png" alt="submit" onclick="addToMark('${post.title.replace(
										"'",
										""
									)}','${post.view_count}')">
                                </div>
                            </div>
                        </div>
                    </div>`
		postContainer.appendChild(div)
	})
}

const loadPostByCategory = async (category) => {
	const loader = document.getElementById("loader")
	loader.classList.remove("hidden")
	const response = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${category}`)
	const data = await response.json()
	let posts = data.posts
	const postContainer = document.getElementById("discuss-box")
	postContainer.innerHTML = ""
	posts.forEach((post) => {
		loader.classList.add("hidden")
		const div = document.createElement("div")
		div.innerHTML = `<div class="min-w-[900px] h-[270px] border-none rounded-3xl bg-[#797DFC1A] p-10">
                        <div class="flex justify-between">
                            <div class="bg-white min-w-[100px] h-[100px] rounded-2xl relative">
                                <div
                                    class="min-w-[18.7px] min-h-[18.7px] rounded-full border-none ${
										post.isActive ? "bg-[#10B981]" : "bg-[#FF3434]"
									}  absolute right-0 top-0">
                                </div>
                                <img class="w-full h-full object-cover rounded-2xl"
                                    src=${post.image} alt="">
                            </div>

                            <div class="flex flex-col w-[70%]">
                                <div class="flex gap-8">
                                    <p class="text-sm font-inter font-medium leading-4 text-[#12132DCC]"># ${post.category}</p>
                                    <p class="text-sm font-inter font-medium leading-4 text-[#12132DCC]">Author : ${post.author.name}</p>
                                </div>
                                <h4 class="text-xl text-black font-bold leading-6 mt-2">${post.title}</h4>
                                <p class="text-[#12132D99] leading-6 font-inter my-4">${post.description}</p>

                                <hr class="border-dashed h-[1px] bg-[#03071233] w-full my-4">

                                <div class="flex justify-between items-center">
                                    <div class="flex gap-8 items-center">
                                        <div class="flex gap-4 items-center text-[#12132D99] font-inter leading-5 ">
                                            <img src="./Assets/images/comment.png" alt="comment">
                                            <p>${post.comment_count}</p>
                                        </div>

                                        <div class="flex gap-4 items-center text-[#12132D99] font-inter leading-5 ">
                                            <img src="./Assets/images/eye.png" alt="eye">
                                            <p>${post.view_count}</p>
                                        </div>

                                        <div class="flex gap-4 items-center text-[#12132D99] font-inter leading-5 ">
                                            <img src="./Assets/images/time.png" alt="time">
                                            <p>${post.posted_time} min</p>
                                        </div>
                                    </div>

                                    <img class="cursor-pointer" src="./Assets/images/submit.png" alt="submit" onclick="addToMark('${post.title.replace(
										"'",
										""
									)}','${post.view_count}')">
                                </div>
                            </div>
                        </div>
                    </div>`
		postContainer.appendChild(div)
	})
}

const loadLatestPost = async () => {
	const response = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`)
	const data = await response.json()
	let posts = data
	const latestPostContainer = document.getElementById("latest-post-box")
	latestPostContainer.innerHTML = ""
	posts.forEach((post) => {
		const div = document.createElement("div")
		div.innerHTML = `<div
                    class="border-solid border-[1px] border-[#12132D26] rounded-3xl bg-white min-w-[374px] p-9 flex flex-col gap-4">
                    <div class="min-w-[320px] min-h-[190px] bg-[#12132D0D] rounded-[20px]">
                        <img class="w-full h-full object-cover rounded-[20px]"
                            src=${post.cover_image} alt="">
                    </div>

                    <div class="flex gap-4 items-center text-[#12132D99] leading-5 ">
                        <img src="./Assets/images/date.png" alt="date">
                        <p>${!post.author.posted_date ? "No Publish Date" : post.author.posted_date}</p>
                    </div>

                    <h4 class="text-black font-extrabold leading-7 text-lg">${post.title}</h4>

                    <p class="text-[#12132D99] leading-6">${post.description.slice(0, 100)}</p>

                    <div class="flex gap-4">
                        <div class="w-[44px] h-[44px] rounded-full border-black border-solid border-[1px] self-end">
                            <img class="w-full h-full object-cover rounded-full"
                                src=${post.profile_image} alt="">
                        </div>

                        <div class="flex flex-col gap-2 mt-4">
                            <h4 class="text-black font-bold leading-5">${post.author.name}</h4>
                            <p class="text-[#12132D99] text-sm leading-4">${!post.author.designation ? "Unknown" : post.author.designation}</p>
                        </div>
                    </div>
                </div>`
		latestPostContainer.appendChild(div)
	})
}

let count = 0
const addToMark = (title, view_count) => {
	count++
	const markCount = document.getElementById("mark-count")
	markCount.innerHTML = count
	const titleContainer = document.getElementById("mark-box")
	const div = document.createElement("div")
	div.innerHTML = `<div class="bg-white rounded-2xl p-4 flex justify-between items-center">
	                        <h4 class="text-black font-semibold leading-6 mt-2 w-[191px]">${title}</h4>
	                        <img src="./Assets/images/eye.png" alt="eye">
	                        <p class="text-[#12132D99] font-inter leading-5">${view_count}</p>
	                    </div>`
	titleContainer.appendChild(div)
}

const handleSearch = () => {
	const searchValue = document.getElementById("search-box").value.toString()

	if (searchValue === "coding" || searchValue === "music" || searchValue === "comedy") {
		loadPostByCategory(searchValue)
	} else {
		alert("enter a valid category name")
	}
}

loadAllPost()
loadLatestPost()
