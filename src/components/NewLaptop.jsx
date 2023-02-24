export default function NewLaptop() {

    return (
        <div>
            <form>
                <h5>Ingresar datos de laptop</h5>
                <ul className="form-style-1">
                    {/* <li><label>Marca <span className="required">*</span></label><input type="text" name="field1" className="field-divided" placeholder="Marca" /> <input type="text" name="field2" className="field-divided" placeholder="Last" /></li> */}
                    <li>
                        <label>Marca <span className="required">*</span></label>
                        <input type="text" name="field1" className="field-long" />
                    </li>
                    <li>
                        <label>Modelo <span className="required">*</span></label>
                        <input type="text" name="field2" className="field-long" />
                    </li>
                    <li>
                        <label>No. serie <span className="required">*</span></label>
                        <input type="text" name="field3" className="field-long" />
                    </li>
                    <li>
                        <label>Procesador <span className="required">*</span></label>
                        <input type="text" name="field4" className="field-long" />
                    </li>
                    <li>
                        <label>Memoria RAM <span className="required">*</span></label>
                        <input type="text" name="field5" className="field-long" />
                    </li>
                    <li>
                        <label>Tipo de almacenamiento <span className="required">*</span></label>
                        <input type="text" name="field6" className="field-long" />
                    </li>
                    <li>
                        <label>Capacidad de almacenamiento <span className="required">*</span></label>
                        <input type="text" name="field7" className="field-long" />
                    </li>
                    <li>
                        <label>Estado de la batería <span className="required">*</span></label>
                        <input type="text" name="field8" className="field-long" />
                    </li>
                    <li>
                        <label>Teclado <span className="required">*</span></label>
                        <input type="text" name="field9" className="field-long" />
                    </li>
                    <li>
                        <label>Estado del cargador <span className="required">*</span></label>
                        <input type="text" name="field10" className="field-long" />
                    </li>
                    <li>
                        <label>Fecha de compra <span className="required">*</span></label>
                        <input className="field-long" type="date" name="field11" />
                    </li>
                    {/* <li>
                        <label>Subject</label>
                        <select name="field4" className="field-select">
                            <option value="Advertise">Advertise</option>
                            <option value="Partnership">Partnership</option>
                            <option value="General Question">General</option>
                        </select>
                    </li> */}
                    <li>
                        <label>Comentarios <span className="required">*</span></label>
                        <textarea name="field5" id="field5" className="field-long field-textarea"></textarea>
                    </li>
                    <li>
                        <label>Evidencia: </label>
                        <input
                            className="field-long"
                            type="text"
                            name="evidencia"
                            placeholder="añadir evidencia"
                        />
                    </li>
                    <li>
                        <input type="submit" value="Submit" />
                    </li>
                </ul>
            </form>

        </div>



    )
}