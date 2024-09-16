import React, { useEffect, useState } from "react"
import { Button, Drawer } from "antd"
import { WyMessenger } from "@weavy/uikit-react"
import { WeavyThemeProvider } from "@contexts/weavy/theme"
import { MessageOutlined } from "@ant-design/icons"
import { useGo } from "@refinedev/core"
import useHash from "@hooks/hash/useHash"

export const WeavyMessenger: React.FC = () => {
  const [open, setOpen] = useState(false)
  const go = useGo()

  const hash = useHash()

  const showDrawer = () => {
    setOpen(true)
  }

  const closeDrawer = () => {
    setOpen(false)
    if (hash === "messenger") {
        go({ hash: "" })
    }
  }

  useEffect(() => {
    if (hash === "messenger") {
      showDrawer()
    }
  }, [hash])

  return (
    <>
      <Button
        type="default"
        onClick={showDrawer}
        title="Messenger"
        // @ts-expect-error Ant Design Icon's v5.0.1 has an issue with @types/react@^18.2.66
        icon={<MessageOutlined />}
      ></Button>
      <Drawer onClose={closeDrawer} open={open} styles={{ body: { padding: 0, display: "flex" } }}>
        <WeavyThemeProvider>
          <WyMessenger />
        </WeavyThemeProvider>
      </Drawer>
    </>
  )
}