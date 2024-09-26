export const expensesByName = (expenses) => {
    const userExpenses = {};

    expenses.forEach((expense) => {
      const name = expense.name;
      const category = expense.category;
      const amount = expense.amount;
      
      if (!userExpenses[name]) {
        userExpenses[name] = {};
      }
      if (!userExpenses[name][category]) {
        userExpenses[name][category] = 0;
      }
      userExpenses[name][category] += amount;
    });
    return userExpenses;
  };