import { useState } from 'react';
import { MenuItem, Select, FormControl, InputLabel, Avatar } from '@mui/material';
import { FlagIcon} from 'react-flag-kit'; // Asegúrate de instalar este paquete si aún no lo has hecho

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Establece el idioma predeterminado

  const USAFlag = () => <FlagIcon code="US" size={48} />;
  const ARGFlag = () => <FlagIcon code="AR" size={48} />;

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    // Aquí puedes agregar lógica para cambiar el idioma en tu aplicación
    // Por ejemplo, podrías utilizar un paquete de internacionalización (i18n)
  };

  return (
    <FormControl>
      <InputLabel id="language-select-label">Idioma</InputLabel>
      <Select
        labelId="language-select-label"
        id="language-select"
        value={selectedLanguage}
        onChange={handleLanguageChange}
        label="Idioma"
      >
        <MenuItem value="en">
          <Avatar>
            <USAFlag />
          </Avatar>
        </MenuItem>
        <MenuItem value="es">
          <Avatar>
            <ARGFlag />
          </Avatar>
        </MenuItem>
        {/* Agrega más idiomas según sea necesario */}
      </Select>
    </FormControl>
  );
};

export default LanguageSelector;
