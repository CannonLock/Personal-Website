import React, { useState, useEffect } from "react"
import { VictoryChart, VictoryLine } from "victory"
import { get_json } from "../../static/js/util"
import { jsx } from "theme-ui"

const BenchmarkGraph = () => {
  const [data, setData] = useState([])
  useEffect( () => {
    const fetchData = async () => {
      const result = await get_json("https://raw.githubusercontent.com/CannonLock/data/master/benchmark/benchmark.json")
      console.log(result, "Fuck")
      setData(result);
    };

    fetchData();
  }, [])

  return (
    <VictoryChart>
      <VictoryLine data={data} fixLabelOverlap={true} x={"Time"} y={"Upload"} />
      <VictoryLine style={{data: { fill: 'lightblue', stroke: 'teal' }}} data={data} fixLabelOverlap={true} x={"Time"} y={"Download"} />
    </VictoryChart>
  )
}

export default BenchmarkGraph
