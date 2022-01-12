// Setup
const contacts = [
    {
      firstName: "Van",
      lastName: "Nguyen",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Pho"],
    },
    {
      firstName: "Son",
      lastName: "Trinh",
      number: "0994372684",
      likes: ["Cheese", "Donut", "Apple"],
    },
    {
      firstName: "Trong",
      lastName: "Le",
      number: "0487345643",
      likes: ["Beer", "King Crab"],
    },
    {
      firstName: "Tong",
      lastName: "Vo",
      number: "unknown",
      likes: ["Tiger", "Sword", "Wine"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Chỉ code phía dưới này
    let namecheck = false;
    let propcheck = false;

    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            namecheck = true;
            if (prop in contacts[i] === true) {
                propcheck = true;
                console.log(contacts[i][prop]);
            }
        }
    }
    if (namecheck === false && propcheck === false) {
        console.log("Khong ton tai thong tin tren");
    }
    if (propcheck === false && namecheck === true) {
        console.log("Khong co thuoc tinh tren");
    }
    
    // Chỉ code phía trên này
  }
  
  lookUpProfile("Van", "likes")

  lookUpProfile("Yen", "number")

  lookUpProfile("Trong", "likes")

  lookUpProfile("Son", "address")
  