
let product = [
    { "id": 1, "bookName": "Nutuk", "status": "bestsellers", "author": " Mustafa Kemal Atatürk", "img": "images/Book/book-0.jpg" },

    { "id": 2, "bookName": "Sular Üstünde Gökler Altında", "status": "bestsellers", "author": "Kaan Murat Yanık", "img": "images/Book/book-1.jpg" },

    { "id": 2, "bookName": "Ermiş", "status": "bestsellers", "author": "Halil Cibran", "img": "images/Book/book-5.jpg" },

    { "id": 2, "bookName": "Vişne Bahçesi", "status": "bestsellers", "author": "Anton Çehoc", "img": "images/Book/book-6.png" },

    { "id": 2, "bookName": "Bir Çöküşün Öyküsü", "status": "bestsellers", "author": "Stefen Zweig", "img": "images/Book/book-7.jpg" },

    { "id": 2, "bookName": "Kızıl Veba", "status": "bestsellers", "author": "Jack London", "img": "images/Book/book-8.jpg" },

    { "id": 2, "bookName": "Dönüşüm", "status": "bestsellers", "author": "Franz Kafka", "img": "images/Book/book-9.png" },

    { "id": 2, "bookName": "Bilinmeyen Bir Kadının Mektubu", "status": "bestsellers", "author": "Stefen Zweig", "img": "images/Book/book-12.png" },



    { "id": 2, "bookName": "Olağan Üstü Bir Gece", "author": "Stefen Zweig", "status": "recommended", "img": "images/Book/book-10.jpg" },

    { "id": 2, "bookName": "İnsanlığımı Yitirirken", "status": "recommended", "author": "Kaan Murat Yanık", "img": "images/Book/book-11.jpg" },


    { "id": 10, "bookName": "Sırça Köşk", "status": "recommended", "author": "Sabahattin Ali", "img": "images/Book/book-2.jpg" },


    { "id": 14, "bookName": "Aforizmalar", "status": "recommended", "author": "Franz Kafka", "img": "images/Book/book-3.png" },

    { "id": 14, "bookName": "Hayvan çiftliği", "status": "classics", "author": "George Orwel", "img": "images/Book/book-4.jpg" },

    { "id": 14, "bookName": "Simyacı", "status": "classics", "author": "Paulo Coelho", "img": "images/Book/book-14.jpg" },

    { "id": 14, "bookName": "İnsan Geleceğini Nasıl Kurar", "status": "classics", "author": "İlber Ortaylı", "img": "images/Book/book-13.jpg" },


    { "id": 14, "bookName": "İyileşmek", "status": "classics", "author": "Caner Yaman", "img": "images/Book/book-12.jpg" },
]
let filters = document.querySelectorAll(".filters span");
console.log(filters);

for (const span of filters) {
    span.addEventListener("click", function () {
        document.querySelector("span.active").classList.remove("active");
        span.classList.add("active");
        console.log(span.id)
        displayTask(span.id);
    })
}
function displayTask(filter) {
    let ulTaskList = document.getElementById("task-list");
    ulTaskList.innerHTML = ""; //

    for (let i = 0; i < product.length; i++) {
        const gorev = product[i];

        if (gorev.status == filter || filter == "all") {
            let liTask = `
                            <label id="li_${gorev.id}" class="text-center " >  
                            <label class="" >
                                <img src="${gorev.img}" class="img mt-1 ms-5 me-5">
                                    <div class="fw-bold text-center mt-2 ">${gorev.bookName}
                                        <br/>
                                        <div class="fw-normal">${gorev.author}</div>
                                        <br/>                        
                                    </div>  
                                    
                                    <div class="btn btn-danger ">Sepete Ekle</div> 

                            </label>
                                               
                            </label> 

                        `;
            ulTaskList.insertAdjacentHTML("beforeend", liTask);
        }
    }
};
displayTask("all")


function toggleModal() {
    // const basketModelElement = document.querySelector(".basket-modal");
    document.querySelector(".basket-modal").classList.toggle("active");
    console.log("aaa")
};
function Close() {
    document.querySelector(".basket-modal").classList.remove("active");

}