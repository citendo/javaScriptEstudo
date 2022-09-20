const mouse = {
    cor : "red",
    marca : "Logitech"
}

mouse.velocidade = 5000;
mouse.trocarDpi = function()
{
    console.log("Mudando DPI")
}
delete mouse.velocidade;
delete mouse.trocarDpi;
console.log(mouse);