let nama = "Rifqi Rizaldi"
let beratBadan = 87
let tinggiBadan = 190.6
let pacar
let alamat = "pablo"
let namaGuru = ["dia","angela",'brando']
namaGuru.push("dea","andi")
// namaGuru.shift()
// namaGuru.pop()
let namaBunga = []
namaBunga.push("tulip","mawar")
pacar ="bella"

if(alamat==null){
    alamat ="di sby"
}else{
    alamat = "di sda"
}

// alert(
// `nama saya ${nama}, berat badan saya ${beratBadan} dan tinggi saya ${tinggiBadan}. 
// Saya punya pacar bernama ${pacar} dan beralamat ${alamat}`
// )

// alert (namaBunga[0])

// for(let i=0;i<namaGuru.length; i = i + 1){
//     console.log(`Nama guru ke ${i+1} adalah ${namaGuru[i]}`)
// }
let i = 0
// do{
// i++
// console.log(`Nama guru ke ${i+1} adalah ${namaGuru[i]}`)
// }while (i<namaGuru.length)

// while(i<namaGuru.length){
//     console.log(`Nama guru ke ${i+1} adalah ${namaGuru[i]}`)
//     i++
// }

let saldoUser = prompt("Inputkan saldo anda : ")
alert(`Saldo user adalah Rp.${saldoUser}`)

let hari = new Date().getDay()
// alert(hari)
if(hari==1){
    console.log(`Sekarang hari Senin`)
}else if(hari==2){
    console.log("Sekarang hari Selasa")
}else if(hari==6){
    console.log("Sekarang hari Rabu")
}else{
    console.log("Sekarang hari Minggu")
}