import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

// Dummy data for the example
const data = [
  { label: 'A', value: 10 },
  { label: 'B', value: 20 },
  { label: 'C', value: 30 },
];

const Dashboard = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(chartRef.current);

    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = +svg.attr('width') - margin.left - margin.right;
    const height = +svg.attr('height') - margin.top - margin.bottom;
    const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3.scaleBand()
      .rangeRound([0, width])
      .padding(0.2)
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


  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4 text-white mt-16">Dashboard</h1>
      <svg ref={chartRef} width="960" height="500"></svg>
    </div>
  );
};

export default Dashboard;
