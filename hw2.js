let obj = {
    b: 2,
    a: 1,
    c: 3,
};

// Tạo hàm mới chứa keys của obj
const keys = Object.keys(obj);

// Dùng map để gọi từng phần tử của mảng keys, chuyển nó thành chữ hoa rồi add vào mảng mới
const keysUppercased = keys.map(key => key.toUpperCase());

// In ra mảng mới
console.log(keysUppercased);