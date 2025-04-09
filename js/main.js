// draw name paths
let offset = 0;
d3.selectAll("path").each(function(d) {
    let path = d3.select(this);
    path.attr("stroke-dashoffset", this.getTotalLength());
    path.attr("stroke-dasharray", this.getTotalLength());
    path.transition()
        .duration(3000)
        .delay(offset)
        .attr("stroke-dashoffset", 0);
    offset = offset + 200;
});

// fill name paths
d3.select("#svgGroup")
    .transition()
    .duration(2500)
    .delay(4000)
    .style("fill", "rgb(33, 37, 41, 1)");

// switch between greyscale/colour intro image
const intro_box = document.getElementById("intro-images");
intro_box.addEventListener("click", () => {
    const img_a = document.getElementById("intro-img-a");
    const img_b = document.getElementById("intro-img-b");
    let a_opa = "1";
    let b_opa = "0";
    if (window.getComputedStyle(img_a).opacity === "1") {
        a_opa = "0";
        b_opa = "1";
    }
    img_a.classList.remove("spin");
    void img_a.offsetWidth;
    img_a.classList.add("spin");
    img_b.classList.remove("spin");
    void img_b.offsetWidth;
    img_b.classList.add("spin");
    d3.select("#intro-img-a")
        .transition()
        .duration(700)
        .style("opacity", a_opa);
    d3.select("#intro-img-b")
        .transition()
        .duration(700)
        .style("opacity", b_opa);
});


// about me image listener
const img = document.getElementById("about-img");
img.addEventListener("click", () => {
    img.classList.remove("jiggle");
    void img.offsetWidth;
    img.classList.add("jiggle");
});