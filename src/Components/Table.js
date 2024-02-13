import '../Styles/Table.css';
import '../Styles/App.css';


function Table() {
    return (
        <div className="limiter">
            <div className="container-table100">
                <div className="wrap-table100">
                    <div className="table100">
                        <table>
                            <thead>
                                <tr className="table100-head">
                                    <th className="column3">Products and Services</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>                                    
                                    <td className="column3">Boiler Installation</td>
                                </tr>
                                <tr>
                                    <td className="column3">Boiler Service & Repair</td>
                                </tr>
                                <tr>
                                    <td className="column3">Central Heating Equipment</td>
                                </tr>
                                <tr>
                                    <td className="column3">Central Heating Installation</td>
                                </tr>
                                <tr>
                                    <td className="column3">Gas Appliances</td>
                                </tr>
                                <tr>
                                    <td className="column3">Gas Cooker Installation</td>
                                </tr>
                                <tr>
                                    <td className="column3">Gas Servicing</td>
                                </tr>
                                <tr>
                                    <td className="column3">Gas Safety Checks</td>
                                </tr>
                                <tr>
                                    <td className="column3">Oil Boiler Servicing</td>
                                </tr>                     
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table;