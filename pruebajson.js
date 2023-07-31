
let mercaderiahtml = document.querySelector("#mercaderia");

agregarProductos = () => {
fetch("mercaderia.json")
  .then((resp) => resp.json())
  .then((data) => {
    data.map((productos) => {
      const productoHTML = document.createElement("div");
      productoHTML.innerHTML = `
        <div class="col-12 col-md-6 mb-5 d-flex justify-content-center">
          <div class="card text-light bg-dark" style="width: 18rem;">
            <img class="card-img-top" src="${productos.img}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${productos.titulo}</h5>
              <p class="card-text">${productos.descripcion}</p>
              <p>$${productos.precio}</p>
              <button type="button" class="btn btn-success" onclick="agregarProductoAlCarrito(${productos.id})">Añadir al carrito</button>
            </div>
          </div>
        </div>
      `;
      mercaderia.append(productoHTML);
    });
  });
}
  agregarProductos()