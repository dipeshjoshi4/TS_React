
export const loginUser = async (email, password) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === "ajay.suneja25@gmail.com" && password === "pass") {
                resolve({
                    success: true,
                    data: {
                        email,
                        username: "sunejajajay",
                        token: "156545asdsdfd5sd4wsdwedew85we98d4w"
                    },
                })
            } else {
                reject({
                    success: false,
                    error:"Invalid Credantials"
                })
            }

        }, 1000);
    })

}