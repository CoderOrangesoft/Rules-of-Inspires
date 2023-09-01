/**
 * loading workboards
 * @param {number} index
 * @param {number} numbers 
 * @param {"created_at"|"n_likes"} sort 
 */
async function workTable(index = 0, numbers = 20, sort) {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", `https://api.codemao.cn/web/works/subjects/19034/works?&offset=${index}&limit=${numbers}&sort=-${sort}&work_subject_id=19034`)
    xhr.send()
    await xhr.status == "DONE"

    /**
     * @type {{items:{id:number,name:string,type:string,praise_times:number,preview:"https://creation.codemao.cn/445/kitten/==.png",view_times:number,audited_at:number,user:{id:"",nickname:"",avatar_url:"","gold":"0"}}[]}}
     */
    let table = JSON.parse(xhr.response)

    let workboard = document.getElementById("")

    for (let i = 0; i < table.items.length && i < workboard.childNodes.length; i++) {
        let detail = table.items[i]
        let div = workboard.childNodes[i]

        div.querySelector(".workname span").textContent = detail.name;

        div.querySelector(".cover").style.backgroundImage = `url(${detail.preview}})`;
    }
}

