export default function Table(params) {
  const { data } = params;
  return (
    <table>
      {data.map((item) => {
        return (
          <tr key={item.id} className=" align-top">
            <td className="w-16 py-3">
              <p>{item.label}</p>
            </td>
            <td className="py-3">:</td>
            <td className="text-ellipsis px-2 py-3">
              <p>{item.value}</p>
            </td>
          </tr>
        );
      })}
    </table>
  );
}
