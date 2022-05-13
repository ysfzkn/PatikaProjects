
function calculateAreaOfCircle(radius)
{
    var area = Math.PI * Math.pow(radius, 2);
    console.log("Yarıçapı " + radius + " olan dairenin alanı: " + (area).toFixed(3));
}

const radius = process.argv[2];
calculateAreaOfCircle(radius);