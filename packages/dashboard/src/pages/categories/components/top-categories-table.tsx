import { BoltIcon } from "@heroicons/react/20/solid"
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table"
import { CarIcon, CoffeeIcon, HomeIcon, KeyIcon, ShoppingBagIcon, StarIcon } from "lucide-react"
import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/ui/card"
import { Progress } from "~/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/ui/table"
import formatCurrency from "~/utils/format-currency"
import formatDate from "~/utils/format-date"

const data: Category[] = [
  {
    id: "home",
    name: "Home",
    icon: "Home",
    current: 1000,
    max: 2050,
    date: "2023-01-01", // Example date in ISO format
  },
  {
    id: "car",
    name: "Transporte",
    icon: "Car",
    current: 2022,
    max: 2050,
    date: "2023-01-01", // Example date in ISO format
  },
  {
    id: "rent",
    name: "Aluguel",
    icon: "Key",
    current: 1984,
    max: 2000,
    date: "2023-01-01", // Example date in ISO format
  },
  {
    id: "utilities",
    name: "Utilidades",
    icon: "Bolt",
    current: 38,
    max: 50,
    date: "2023-01-01", // Example date in ISO format
  },
  {
    id: "subscriptions",
    name: "Inscrições",
    icon: "Star",
    current: 35,
    max: 200,
    date: "2023-01-01", // Example date in ISO format
  },
  {
    id: "shopping",
    name: "Shopping",
    icon: "ShoppingBag",
    current: 15,
    max: 250,
    date: "2023-01-01", // Example date in ISO format
  },
  {
    id: "food",
    name: "Comidas e Bebidas",
    icon: "Coffee",
    current: 0,
    max: 450,
    date: "2023-01-01", // Example date in ISO format
  },
]

export type Category = {
  id: string
  name: string
  icon: string
  current: number
  max: number
  date: string // Add date field
}

const iconMap = {
  Home: <HomeIcon className="mr-2 h-5 w-5" />,
  Car: <CarIcon className="mr-2 h-5 w-5" />,
  Key: <KeyIcon className="mr-2 h-5 w-5" />,
  Bolt: <BoltIcon className="mr-2 h-5 w-5" />,
  Star: <StarIcon className="mr-2 h-5 w-5" />,
  ShoppingBag: <ShoppingBagIcon className="mr-2 h-5 w-5" />,
  Coffee: <CoffeeIcon className="mr-2 h-5 w-5" />,
  // ... add other icon mappings
}

export const columns: ColumnDef<Category>[] = [
  {
    id: "date",
    accessorFn: (row) => new Date(row.date), // Accessor function for date
    header: () => <div>Data</div>,
    cell: ({ getValue }) => {
      const date = getValue() as Date
      return formatDate(date)
    },
  },
  {
    accessorKey: "name",
    header: "Categoria",
    cell: ({ row }) => {
      const name = row.getValue("name") as string
      const icon = row.original.icon // Assuming 'icon' is the key in your data for icon names
      return (
        <div className="flex items-center">
          {/* @ts-ignore */}
          {iconMap[icon]} {/* Render the corresponding icon */}
          <div className="capitalize">{name}</div>
        </div>
      )
    },
  },
  {
    accessorKey: "current",
    header: () => <div className="text-right">Valor</div>,
    cell: ({ row }) => {
      const current = parseFloat(row.getValue("current"))

      // Format the amount as a dollar amount
      return <div className="text-right font-medium">{formatCurrency(current)}</div>
    },
  },
  {
    id: "progress",
    header: "Progresso",
    cell: ({ row }) => {
      const current = row.getValue("current") as number
      const max = row.getValue("max") as number
      const progressPercent = (current / max) * 100 // Calculate progress percentage

      return (
        <div className="w-full px-2">
          <Progress value={progressPercent} className="w-full" />
        </div>
      )
    },
  },
  {
    accessorKey: "max",
    header: () => <div className="text-right">Valor</div>,
    cell: ({ row }) => {
      const max = parseFloat(row.getValue("max"))

      // Format the amount as a dollar amount
      return <div className="text-right font-medium">{formatCurrency(max)}</div>
    },
  },
]

export function TopCategoriesTable() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top de Categorias</CardTitle>
        <CardDescription>Onde você mais usa seu dinheiro?</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id} className="[&:has([role=checkbox])]:pl-3">
                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="[&:has([role=checkbox])]:pl-3">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    Sem resultados.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}