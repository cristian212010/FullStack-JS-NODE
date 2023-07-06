const url = "http://localhost:5000/api/categorias"

export const getCategorias = async () =>{
    try {
        const categorias = await fetch(url);
        const datosCategoria = categorias.json();
        return datosCategoria;
    } catch (error) {
        console.log(error);
    }
}

export const nuevaCategoria = async (registro) => {
    try {
      await fetch(`${url}/`, {
        method: "POST",
        body: JSON.stringify(registro),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
        console.log(error);
    }
  };

export const deleteCategoria = async (id) =>{
    try {
        await fetch(`${url}/${id}`,{
            method: "DELETE",
            headers: {
                "Content-Type":"application/json",
            }
        });
        window.location.href = "index.html"
    } catch (error) {
        console.log(error);
    }
}

export async function selectOne(id) {
    try {
        const response = await fetch(`${url}/${id}`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}

export async function updateCategoria(data,id){
    try {
            await fetch(`${url}/${id}`,{
            method: "PUT",
            body: JSON.stringify(data),
            headers:{
                'Content-Type':"application/json",
            },
        });
        window.location.href = "index.html"
    } catch (error) {
        console.log(error);
    }
} 