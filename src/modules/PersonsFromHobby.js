const html = `
    <div>
        <h1 align="center">Persons From Hobby</h1>
        <input placeholder="Enter Hobby"/>
        <button id="reloadBtn">Find Persons</button>'
        <div id="resultContainer"></div>
    </div>
`;

export const renderPersonsFromHobby = parentContainer => {
  parentContainer.innerHTML = html;
};
