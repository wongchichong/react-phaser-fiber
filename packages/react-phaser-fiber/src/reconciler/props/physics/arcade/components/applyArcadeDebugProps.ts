import { ArcadeDebugProps } from '../types'
import { iterateProps } from '../../../../util/iterateProps'
import isEqual from 'fast-deep-equal'

/**
 * Applies props for Phaser.Physics.Arcade.Components.Debug
 */
export function applyArcadeDebugProps<
  T extends Phaser.Physics.Arcade.Components.Debug
>(instance: T, oldProps: ArcadeDebugProps, newProps: ArcadeDebugProps) {
  iterateProps(oldProps, newProps, (key, newValue, oldValue) => {
    switch (key) {
      case 'debug':
        if (!isEqual(newValue, oldValue)) {
          const { showBody = false, showVelocity = false, bodyColor } = newValue
          instance.setDebug(showBody, showVelocity, bodyColor)
        }
        break
    }
  })
}