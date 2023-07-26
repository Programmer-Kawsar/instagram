const mainForm = document.getElementById("create-post");
// show latest posts
const showPost = document.querySelector(".post-start")

const showLatestPost = ()=>{
    const post =  getDataLs("posts");
    let content = "";
    if (post.length > 0) {
        post.reverse().map((item, index)=>{
            content+=`
            <div class="post-item">
                <!-- post-item-top-details start -->
                <div
                  class="post-item-top-details d-flex justify-content-between"
                >
                  <a
                    href="#"
                    class="menu-item-link d-flex align-items-center px-2"
                  >
                    <i class="">
                      <img src="${item.author_image}" alt="" />
                    </i>
                    <div class="name ms-3">${item.author_name}</div>
                    <i class="ms-2">
                      <svg
                        aria-label="Verified"
                        class="x1lliihq x1n2onr6"
                        color="rgb(0, 149, 246)"
                        fill="rgb(0, 149, 246)"
                        height="12"
                        role="img"
                        viewBox="0 0 40 40"
                        width="12"
                      >
                        <title>Verified</title>
                        <path
                          d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </i>
                    <span class="xsgj6o6 xw3qccf ms-1"
                      ><span
                        class="x1lliihq x1plvlek xryxfnj x1n2onr6 x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x1i0vuye xvs91rp xo1l8bm x1roi4f4 x10wh9bi x1wdrske x8viiok x18hxmgj"
                        dir="auto"
                        style="
                          line-height: var(--base-line-clamp-line-height);
                          --base-line-clamp-line-height: 18px;
                        "
                        >•</span
                      ></span
                    >
                    <div class="ms-1 time-ago">${timeAgo(item.post_time)}</div>
                  </a>
                  <a
                    href="#"
                    class="menu-item-link d-flex align-items-center px-2"
                  >
                    <i class="fa-solid fa-ellipsis"></i>
                  </a>
                </div>
                <!-- post-item-top-details end -->
                <!-- post-item-image or content start -->
                <div class="post-main-image">
                  <img src="${item.main_image ? item.main_image : ""}" alt="" />
                </div>
                <!-- post item bottom details start -->
                <div
                  class="post-item-bottom-details mt-3 d-flex justify-content-between"
                >
                  <a href="#" class="menu-item-link d-flex align-items-center">
                    <i class="fa-regular fa-heart"></i>

                    <i class="fa-regular fa-comment mx-3"></i>

                    <i class="fa-regular fa-paper-plane"></i>
                  </a>
                  <a
                    href="#"
                    class="menu-item-link d-flex align-items-center px-2"
                  >
                    <i class="fa-regular fa-bookmark"></i>
                  </a>
                </div>
                <!-- post item bottom details end -->
                <!-- like and content details start -->
                <div class="likes-content mt-3">
                  <a href="#"> 230 likes </a> <br />
                  <a href="#">
                    ${item.post_content ? item.post_content : ""}
                  </a>
                  <br />
                  <a href="#" class="p-color"> more </a> <br />
                  <a href="#" class="p-color"> View all 204 comments </a> <br />
                  <form action="" class="d-flex">
                    <input
                      class="w-100 border-0 mt-2"
                      type="text "
                      placeholder="Add a comment"
                    />
                    <button class="btn">Post</button>
                  </form>
                </div>

                <!-- like and content details end -->
                <!-- post-item-image or content end -->
              </div>
              <hr />
            
            `
        })
        
    }else{
        content="<h2>No Posts Found</h2>";
    }

    showPost.innerHTML = content;

};
showLatestPost();

mainForm.onsubmit = (e) => {
    e.preventDefault();
    const form_data = new FormData(mainForm);
    const data =  Object.fromEntries(form_data);
   

    if (!data.name || !data.profileimage) {
        alert(`please input author name and profile image`);
    }else{
 // get previous data
 const preData = getDataLs("posts");

 preData.push(
  {
      author_name: data.name,
      author_image: data.profileimage,
      main_image: data.mainimage ?? null,
      post_content: data.textarea ?? null,
      post_time: Date.now(),

  });

// send data
  sendDataLs("posts", preData);
  showLatestPost();
    }
   mainForm.reset();
};