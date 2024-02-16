import { Theme } from '@radix-ui/themes';
function Lang() {
  return (
    <Theme>
      <Select.Root defaultValue="spanish">
        <Select.Trigger radius="large" />
        <Select.Content>
          <Select.Item value="apanish">ES</Select.Item>
          <Select.Item value="portuguese">BR</Select.Item>
          <Select.Item value="english">ENG</Select.Item>
        </Select.Content>
      </Select.Root>
    </Theme>
  );
}

export default Lang;
