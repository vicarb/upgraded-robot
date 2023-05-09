import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

// Dummy data for the example
const data = [
  { label: 'A', value: 10 },
  { label: 'B', value: 20 },
  { label: 'C', value: 30 },
];

const Dashboard = () => {
  const chartRef = useRef(null);
  
  const [chartSize, setChartSize] = useState({ width: 960, height: 500 });

  useEffect(() => {
    const updateChartSize = () => {
      if (window.innerWidth < 640) { // Adjust the breakpoint based on your needs
        setChartSize({ width: window.innerWidth - 40, height: 500 });
      } else {
        setChartSize({ width: 960, height: 500 });
      }
    };

    window.addEventListener('resize', updateChartSize);
    updateChartSize();

    return () => {
      window.removeEventListener('resize', updateChartSize);
    };
  }, []);


  useEffect(() => {
    
    const svg = d3.select(chartRef.current);
    const margin = { top: 20, right: 20, bottom: 30, left: 0 };
    const width = chartSize.width - margin.left - margin.right;
    const height = chartSize.height - margin.top - margin.bottom;

    const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);
    
    const padding = 40

    const x = d3.scaleBand()
      .rangeRound([padding, width])
      .padding(0.3)
      .domain(data.map(d => d.label));

    

    const y = d3.scaleLinear()
      .rangeRound([height, 0])
      .domain([0, d3.max(data, d => d.value) ?? 0]);

    g.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));

    g.append('g')
      .call(d3.axisLeft(y).ticks(10, '%'))
      .append('text')
      .attr('fill', '#000')
      .attr('x', 2)
      .attr('y', y(y.ticks().pop() ?? 0) + 0.5)
      .attr('dy', '0.32em')
      .attr('text-anchor', 'start')
      .text('Value');

      svg.selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('fill', '#3B82F6') // Apply the blue-500 color directly
      .attr('x', d => x(d.label) ?? 0)
      .attr('y', d => y(d.value))
      .attr('width', x.bandwidth())
      .attr('height', d => height - y(d.value))
      .attr('rx', 4) // Round the edges on the x-axis
      .attr('ry', 4); // Round the edges on the y-axis

      return () => {
        svg.selectAll('*').remove();
      };
  }, [chartSize]);

  return (
    <div className="container mx-auto p-4">
    <h1 className="text-2xl font-semibold mb-4 text-white mt-16">Dashboard & Metrics</h1>
    <div className="w-full h-full">
      <svg ref={chartRef} preserveAspectRatio="xMinYMin meet" viewBox={`0 0 ${chartSize.width} ${chartSize.height}`}></svg>
    </div>
  </div>
  );
};

export default Dashboard;
