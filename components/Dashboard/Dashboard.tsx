import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const data = [
  { label: 'Apples', value: 10 },
  { label: 'Oranges', value: 20 },
  { label: 'Bananas', value: 15 },
  { label: 'Grapes', value: 5 },
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
      .padding(0.1)
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
      .attr('class', 'bar')
      .attr('x', d => x(d.label) ?? 0)
      .attr('y', d => y(d.value))
      .attr('width', x.bandwidth())
      .attr('height', d => height - y(d.value));
    
  }, []);

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold mb-8">Dashboard</h2>
      <svg ref={chartRef} width="960" height="500"></svg>
    </div>
  );
};

export default Dashboard;