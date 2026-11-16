

const Markets = () => {
  return (
    <section>
          <h1>See the same role, four markets.</h1>
          <p>A snapshot comparison for Frontend Engineer, aggregated from live job postings. Figures below are sample output for illustration.</p>
          <table id="table">
             <tr>
                <th>Market</th>
                <th>Currency</th>
                <th>Median annual pay</th>
                <th>vs United States</th>
             </tr>
             <tr>
               <td>United States</td>
               <td>USD</td>
               <td>$128,400</td>
               <td>baseline</td>
             </tr>
              <tr>
               <td>Germany</td>
               <td>EUR</td>
               <td>E71,200</td>
               <td>&#9660 8%</td>
             </tr>
             <tr>
               <td>United Kingdom</td>
               <td>GBP</td>
               <td>E58,900</td>
               <td>&#9660 %14%</td>
             </tr>
              <tr>
               <td>South Africa</td>
               <td>ZA</td>
               <td>R58,900</td>
               <td>&#9660 %45%</td>
             </tr>
             
          </table>
    </section>
  )          
}

export default Markets