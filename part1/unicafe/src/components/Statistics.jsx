import { StatisticLine } from './StatisticLine'

export const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad

  if (total === 0) {
    return (
      <>
        <h2>statistics</h2>
        <p>No Feedback given</p>
      </>
    )
  }

  return (
    <>
      <h2>statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="Total" value={total} />
          <StatisticLine
            text="Average"
            value={((good * 1 + bad * -1) / total).toFixed(2)}
          />
          <StatisticLine
            text="Positive"
            value={`${((good / total) * 100).toFixed(2)}%`}
          />
        </tbody>
      </table>
    </>
  )
}
