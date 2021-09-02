const mchart  = function () {
  let width = null
  let height = null
  let chart = null


  function init (el) {
    width = parseInt(getComputedStyle(el).width, 10)
    height = parseInt(getComputedStyle(el).height, 10)
    el.append(document.createElement('svg'))
    chart = d3.create("svg")
            .attr("viewBox", [0, 0, width, height]);

    addLine()
    return this
  }

  function addLine() {
    chart.append('rect')
         .attr('height', 20)
         .attr('width', 20)
         .attr('fill', 'red')
  }

  return {
    width,
    height,
    init,
    chart,
  }
}()