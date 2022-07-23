
let offers=["https://d32baadbbpueqt.cloudfront.net/Promotion/c5ca0556-0679-4cce-8767-9d12a1533a7d.jpg","https://d32baadbbpueqt.cloudfront.net/Promotion/a1a487db-aa91-4ea9-8867-eced4b88f7ca.jpg","https://d32baadbbpueqt.cloudfront.net/Promotion/1cfa401d-878f-4d6e-9ac4-e5f845ff601a.jpg","https://d32baadbbpueqt.cloudfront.net/Promotion/2df38bd5-4c0f-4d83-b45e-774d65cdd196.jpg","https://d32baadbbpueqt.cloudfront.net/Promotion/7dfbb470-5442-41e2-83df-d5b9a8acfc47.jpg","https://d32baadbbpueqt.cloudfront.net/Promotion/2641279a-b130-40c8-896d-db03e2bb79d0.jpg","https://d32baadbbpueqt.cloudfront.net/Promotion/1c8f8fbc-6277-4175-96e3-bc91fce30a5b.jpg","https://d32baadbbpueqt.cloudfront.net/Promotion/220cc5cf-d01e-4ef1-b356-4a537bc489fe.jpg","https://d32baadbbpueqt.cloudfront.net/Promotion/a481d0fd-2f78-41b3-b10f-5f363cfe583c.jpg"]


display(offers)

function display(data){
document.querySelector("#offerCard").innerHTML=""
    data.map(function(el){
        let div=document.createElement("div")
        let img=document.createElement("img")
        img.src=el
        div.append(img)
        document.querySelector("#offerCard").append(div)
    })
}