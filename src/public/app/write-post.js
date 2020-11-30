$("#write-btn").click(()=>{
   const userId = JSON.parse(window.localStorage.user).id
    const title = $("#p-title").val()
    const body = $("#p-body").val()
                    //this data i am sending
    $.post("/api/posts" , { userId , title , body}, async (data) =>{

        await $("#content").load("../components/my-posts.html")

    })

})