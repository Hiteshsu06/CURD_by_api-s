import '../style/Table.css';
export const Table = ({ tableData, heading }) => {

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {heading.map((data, index) => { return (<th className={data.classNameth} key={index}>{data.id}</th>) })}
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => {
            return (
              <tr key={index}>
                {heading.map((head, headIndex) => {
                  console.log(":head data", head.className)
                  return (<td className={head.classNametd}>{data[head.id]}</td>)
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}