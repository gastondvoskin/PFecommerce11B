import { ResponsiveLine } from '@nivo/line';
const data = [
    {
      id: 'ventas',
      data: [
        { x: '2023-01-01', y: 100 },
        { x: '2023-02-01', y: 150 },
        { x: '2023-03-01', y: 200 },
        { x: '2023-04-01', y: 180 },
        { x: '2023-05-01', y: 250 },
        // Agrega más puntos de datos según tus necesidades
      ],
    },
  ];
  
  const MyLineChart = () => {
    return (
      <div style={{ height: '400px' }}>
        <h2>Mis ventas</h2>
        <ResponsiveLine
          data={data}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          xScale={{ type: 'time', format: '%Y-%m-%d', precision: 'day' }}
          xFormat="time:%Y-%m-%d"
          yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            format: '%b %Y',
            tickValues: 'every 1 month',
            legend: 'Fecha',
            legendOffset: 36,
            legendPosition: 'middle',
          }}
          axisLeft={{
            legend: 'Ventas',
            legendOffset: -60,
            legendPosition: 'middle',
          }}
          curve="monotoneX"
          colors={{ scheme: 'category10' }}
          enablePointLabel={true}
          pointSize={8}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabel="y"
          pointLabelYOffset={-12}
          enableArea={true}
          areaOpacity={0.2}
          enableGridX={false}
          enableGridY={true}
          enableSlices="x"
          tooltip={(slice) => {
            return (
              <div style={{ background: 'white', padding: '9px 12px', border: '1px solid #ccc' }}>
                <div><strong>Fecha:</strong> {slice.point.data.xFormatted}</div>
                <div><strong>Ventas:</strong> {slice.point.data.y}</div>
              </div>
            );
          }}
        />
      </div>
    );
  };
  
  export default MyLineChart;
  