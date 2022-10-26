const capitalize = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'sliceName',
        message: 'What is the slice name?',
      },
      {
        type: 'select',
        name: 'isFolder',
        message: 'Create folder for slice?',
        choices: ['Yes', 'No'],
      },
    ];
    return inquirer
      .prompt(questions)
      .then(answers => {
        const { sliceName, isFolder } = answers;
        let path = 'src/store/reducers';

        if (isFolder === 'Yes') {
          path = `src/store/reducers/${sliceName}`;
        }

        return { sliceName, path, capitalizeName: capitalize(sliceName) };
      });
  },
};